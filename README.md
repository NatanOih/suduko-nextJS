This is a project i used to learn about nextJS.
visit here https://suduko-next-js.vercel.app/

I utilized nextJS server actions to maintain the sudoko logic elements inside the server, the sudoko itself is a class of utilities i used to create and solve the sudoko.

Tried to give a good user expirience for keyboard and touch devices along a responsive layout.
I track the current game with also concidering refreshes (local storage) and a server data base (currently its just a shared text file but i guess i`ll have some sort of light user authentication so each one will have its own games recorded, maby i will use prisma or mongodb, will think about it).

For the state managment i tried to avoid using Redux and wanted to keep it minimal and simple, i have researched few state managment libraries and zustand/jotai were the best options i have found. Eventually decided to use jotai.

All the frontend tricks and gimiks are with pure logic and tailwind, experimented with tailwind merge (and it works well).
