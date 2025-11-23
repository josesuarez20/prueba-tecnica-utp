import Footer from "@/ui/components/footer";
import Header from "@/ui/components/header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header /> 
            <main className="flex-1">
                { children }
            </main>
            <Footer />
        </div>
    );
}