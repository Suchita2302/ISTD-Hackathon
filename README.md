


#PrepAI: Your AI-Powered Interview Training and Simulation Platform  

PrepAI is an innovative platform designed to streamline interview preparation using AI-driven solutions. It combines real-time feedback, dynamic learning content, and full-spectrum interview simulations to provide a comprehensive and personalized learning experience.  

---

Features  

🎯 **Key Features**  
- **AI-Powered Feedback**: Real-time scoring and personalized insights using advanced AI models.  
- **Simulated Interview Rounds**: Mimics real-world interview processes including coding challenges, group discussions, and HR interviews.  
- **Dynamic Learning Content**: Adapts question difficulty based on user skill levels.  
- **Role-Based Dashboards**: Customizable views for Super Admins, Admins, Instructors, and Students.  
- **Integrated Video Conferencing**: Seamless live interview simulations powered by Zoom SDK.  
- **Cloud-Based Scalability**: Built on Firebase and deployed on Vercel for reliability and performance.  

---

## Tech Stack  

### **Frontend**  
- **Framework**: React with TypeScript  
- **UI Library**: Material-UI (MUI) for a consistent and modern interface  
- **State Management**: Redux or Context API  

### **Backend**  
- **Authentication**: Firebase Authentication  
- **Database**: Firebase Firestore  
- **Storage**: Firebase Storage for large files (e.g., resumes, interview recordings)  

### **Deployment**  
- **Hosting**: Vercel for frontend deployment and scalability  
- **Backend Functions**: Firebase Functions for API logic  

---

## Installation  

### **Prerequisites**  
- Node.js v16 or later  
- Firebase CLI installed globally  

### **Steps to Install**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/HarshTambade/prepai.git
   cd prepai
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Create a `.env` file and add the following environment variables:  
   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   REACT_APP_ZOOM_API_KEY=your-zoom-api-key
   REACT_APP_GEMINI_API_KEY=your-gemini-api-key
   ```  

4. Run the development server:  
   ```bash
   npm start
   ```  

5. Open your browser and navigate to `http://localhost:3000`.  

---

## Deployment  

### **Deploying to Vercel**  
1. Install the Vercel CLI:  
   ```bash
   npm install -g vercel
   ```  

2. Log in to Vercel:  
   ```bash
   vercel login
   ```  

3. Deploy the app:  
   ```bash
   vercel --prod
   ```  

### **Firebase Functions**  
1. Initialize Firebase in your project:  
   ```bash
   firebase init
   ```  

2. Deploy Firebase functions:  
   ```bash
   firebase deploy --only functions
   ```  

---

## Project Structure  

```plaintext
├── public/                # Public assets (favicon, logos, etc.)  
├── src/                   # Source code  
│   ├── components/        # Reusable UI components  
│   ├── pages/             # Application pages  
│   ├── services/          # Firebase and API integration  
│   ├── store/             # State management (Redux or Context API)  
│   ├── utils/             # Utility functions  
│   ├── App.tsx           # Main application component  
│   └── index.tsx         # Entry point  
├── firebase/              # Firebase functions  
├── .env                   # Environment variables  
├── package.json           # Project metadata and dependencies  
└── README.md              # Project documentation  
```  

---

## Roadmap  

- [x] Core features: Role-based dashboards, AI scoring, and dynamic content  
- [x] Real-time interview simulation with Zoom SDK    
- [x] Advanced Analytics and Leaderboards   

---

## Contributors  

- **[Harsh Tambade](https://github.com/HarshTambade)** - Founder and Lead Developer  
- **[Suchita Nigam ](https://github.com/SuchitaNigam)** - Co Developer
- **Team Elites**  

---

## Acknowledgments  

- Gemini API  
- Firebase for backend support  
- Vercel for seamless deployment  
```  
