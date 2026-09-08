import { CommentList } from "./components/CommentList";
import { CommentProvider } from "./contexts/CommentProvider";

function App() {
    
    return (
        <main className="flex min-h-screen items-center bg-[#f5f6fa] py-[58px]">
            <CommentProvider>
                <CommentList/>
            </CommentProvider>
        </main>
    );
}

export default App;
