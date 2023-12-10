# AnswerMillion.com Architecture

## Overview
This document outlines the high-level architecture for AnswerMillion.com, an innovative platform integrating VoIP and AI technologies to deliver advanced communication and analysis services.

## Architecture Components

### Root
The central hub of the application.

#### VoIP Handling
- **FreeSWITCH**
  - Manage Incoming 

#### Voice-to-Text Transcription
- **Local AI-Driven Transcription Service**
  - Convert VoIP Call Audio to Text

#### AI Model Processing
- **Custom Local AI Model**
  - Analyze Transcribed Text 
  - Custom NLP AI

#### Text-to-Speech Conversion
- **Local Text-to-Speech Service**
  - Convert Text Responses to Audio for VoIP Calls

#### Data Storage and Management
- **MongoDB (Local)**
  - Store Transcription Data, AI Analysis Results, and Call Records

#### File Storage System
- **MinIO (Local)**
  - Store Audio Files and Other Media

#### Monitoring and Maintenance
- **Open Source Monitoring Tools (e.g., Prometheus, Grafana)**
  - Monitor System Performance and Health
  - Alerting and Reporting

#### Containerization and Deployment
- **Docker and Docker Compose**
  - Containerize all components into a single stack
  - Simplify deployment and scaling

#### Application Backend
- **Node.js (Primary Backend) / FastAPI (Python for AI Processing)**
  - Manage Application Logic
  - Coordinate Data Flow and Processing

 # AnswerMillion Telephonic Interview System

## Overview
This document outlines the workflow and architecture for the telephonic interview system in AnswerMillion, utilizing FreeSWITCH for call handling and integrating various technologies for a seamless interview experience.

## System Workflow

### 1. Call Reception and Interview Code Entry
- **Call Reception**: 
  - FreeSWITCH receives the call and uses IVR capabilities to greet candidates and prompt for interview code.
- **Code Verification**: 
  - Candidates enter their interview code via DTMF tones. FreeSWITCH sends this code to the Node.js backend for verification.

### 2. Text-to-Voice for Interview Questions
- **Fetching Questions**: 
  - Post verification, the backend retrieves relevant interview questions from the database.
- **Text-to-Voice Conversion**: 
  - Questions are sent to a text-to-speech service to convert them into audio.
- **Playing Questions**: 
  - FreeSWITCH plays these audio questions to the candidate over the call.

### 3. Voice-to-Text for Candidate Responses
- **Recording Responses**: 
  - FreeSWITCH records the candidate's voice as they respond to each question.
- **Voice-to-Text Conversion**: 
  - Recorded responses are sent to a voice-to-text service for transcription.

### 4. Submitting Responses to Database
- **Storing Transcripts**: 
  - The backend receives transcribed text along with interview session data.
- **Database Storage**: 
  - Responses are stored in the local MongoDB database, tagged with the interview session ID.

### 5. Session Tracking and Management
- **Call Session Management**: 
  - FreeSWITCH manages the call session, including timeouts and hang-ups.
- **Interaction Logging**: 
  - Logs each interaction for analysis and records outcomes (e.g., successful answer, hang-up).

### 6. Technical Integration
- **API Communication**: 
  - Node.js backend communicates with FreeSWITCH via event socket interface or REST API.
- **Docker Implementation**: 
  - Components including FreeSWITCH, Node.js backend, and MongoDB are containerized and managed using Docker Compose.

## Conclusion
This architecture enables candidates to complete interviews entirely over the phone. FreeSWITCH handles call aspects, while the backend and APIs manage logic, data processing, and storage, ensuring an automated, scalable, and efficient telephonic interview system.

