import { AddComment } from "./components/AddComment";
import { CommentList } from "./components/CommentList";
import { CommentProvider } from "./contexts/CommentProvider";

function App() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 px-4 py-8 md:gap-6 md:px-10.5 md:py-14.5">
            <CommentProvider>
                <CommentList />
                <AddComment/>
            </CommentProvider>
        </main>
    );
}

export default App;
