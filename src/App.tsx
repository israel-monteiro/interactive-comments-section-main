import { AddComment } from "./components/AddComment";
import { CommentList } from "./components/CommentList";
import { CommentProvider } from "./contexts/CommentProvider";

function App() {
    return (
        <main className="flex flex-col min-h-screen items-center py-14.5 gap-6">
            <CommentProvider>
                <CommentList />
                <AddComment/>
            </CommentProvider>
        </main>
    );
}

export default App;
