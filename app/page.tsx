
export const metadata = {
  title: "Voice Toy",
};
import { VoiceToy } from "./components/VoiceToy";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <VoiceToy />
    </main>
  );
}
