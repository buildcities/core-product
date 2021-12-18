export default function LeaveNoteSection() {
  return (
    <div className="mb-6">
      <span className="block md:text-3xl text-2xl font-sans font-medium text-paragraph">
        Leave note
      </span>
      <small className="text-sm text-paragraph font-medium">
        If you didn’t find right rules that suits you, feel free to type your
        own that build_citizens have to respect.
      </small>
      <textarea
        placeholder="Your note here"
        className="rounded-lg border-dashed border-2 border-gray-800 bg-cardBackground w-full h-24 p-4 mt-4 flex items-center text-paragraph"
      ></textarea>
    </div>
  );
}
