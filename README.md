
  <h1 align="center" style="font-weight: bold;">PlayTogether hub 🎮🧑‍🤝‍🧑</h1>
 
 <h3 align="center" style="font-weight: bold;">:point_down: Access now :point_down:</h3>
 <h3 align="center" ><a target="_blank" href="https://playtogetherhub.vercel.app/"> PlayTogether hub</a></h3>
 
 <p align="center">
  <a href="#technologies">Technologies</a> • 
  <a href="#started">Getting Started</a> • 
  <a href="#future">Roadmap</a>
 </p>
 
 <p align="center">
     <b>Say goodbye to solo gaming and hello to endless fun with PlayTogether hub.<br> Discover fellow gamers who share your gaming tastes and preferences</b>
 </p>
 
 <p align="center">
   <img width="485" alt="image" src="https://github.com/guirlviana/helpinvestor/assets/65058505/b97911dd-1603-41d9-8938-d52cfd5258bd">
 </p>
 
 <h2 id="technologies">💻 Technologies</h2>


### Backend

- Node.js
- Express.js
- Typescript
- PostgreSQL
- Docker
- AWS

### Frontend

- Typescript
- React.js
- Tailwind CSS
- Docker
- Vercel

 <h2 id="started">:footprints: First steps</h2>

 PlayTogether hub is divided in frontend and backend folder.

 You need to have Node and npm install, chatGPT can help you with the installation.

 For frontend it is required to have backend running!

Go to backend folder and install dependencies

 ```
 cd backend && npm install
```

We are running postgres using docker, check how to install docker here: [https://docs.docker.com/engine/install/](installation)


create a `.env` file in root of backend folder with these variables
```

LOGIN_SECRET_KEY='playtogetherhubsecrekey' // you can change it

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pthdb"

IS_PRODUCTION=0
```

Now start the database

```
docker-compose up -d db
```

Dependencies installed, database running, now let's running the migrations

 ```
 npm run migrate
```

And final start the api 

 ```
npm run start-dev
 ```
 
 <h2 id="future">🛣️ Roadmap</h2>
 
 | Feature | Status |
 | ------- | ------- | 
 | Gamer Page | 🕙 | 
 | Games multi-select register  | 🕙 | 
 | Gamer select/filter by platform  | 🕙 | 
 | Gamer icons  | 🕙 | 

