
export const metadata = {
  title: "Voice Toy",
};
import { VoiceToy } from "./components/VoiceToy/VoiceToy";


export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-main	text-5xl font-bold mb-5">Voice
        <span className="inline-block ml-1.5 p-1.5 border-round rounded-md  bg-main text-white">Toy</span>
      </h1>
      <VoiceToy />
    </div>
  );
}
