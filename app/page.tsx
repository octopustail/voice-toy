
export const metadata = {
  title: "Voice Toy",
};
import { VoiceToy } from "./components/VoiceToy/VoiceToy";


export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-between p-24">
        <VoiceToy />
    </div>
  );
}
