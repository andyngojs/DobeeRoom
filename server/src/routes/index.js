import userRouter from "./users.js";
import postRouter from "./posts.js";
import savedList from "./savedList.js";

export default function Router(app) {
    app.use('/api', userRouter);
    app.use('/api', postRouter);
    app.use('/api', savedList);
}