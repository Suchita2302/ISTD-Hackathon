export class JSONExtractionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'JSONExtractionError';
  }
}

export const extractJSONFromText = (text: string): any => {
  // Remove any non-JSON content before and after the JSON object
  const cleanText = text
    .replace(/^[^{]*/, '') // Remove anything before first {
    .replace(/}[^}]*$/, '}') // Remove anything after last }
    .replace(/```json\n?|\n?```/g, '') // Remove code blocks
    .replace(/[\u201C\u201D]/g, '"') // Replace smart quotes
    .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
    .replace(/[\r\n\t]/g, ' ') // Remove newlines and tabs
    .trim();

  try {
    // First try direct parsing
    return JSON.parse(cleanText);
  } catch (error) {
    // If direct parsing fails, try to find and parse JSON objects
    const matches = cleanText.match(/\{(?:[^{}]|(\{[^{}]*\}))*\}/g);
    if (!matches) {
      throw new JSONExtractionError('No JSON object found in response');
    }

    // Sort matches by length (descending) and try to parse each
    const sortedMatches = matches.sort((a, b) => b.length - a.length);
    
    for (const match of sortedMatches) {
      try {
        const parsed = JSON.parse(match);
        // Verify the parsed object has the expected structure
        if (parsed && typeof parsed === 'object') {
          return parsed;
        }
      } catch {
        continue;
      }
    }
    
    throw new JSONExtractionError('No valid JSON found in matches');
  }
};