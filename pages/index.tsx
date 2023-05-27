import Card from "@/app/global/components/card";

export default function Home() {
  return (
    <div className="container-sm">
      <div className="grid grid-cols-4 gap-4">
        {[0, 1, 2, 3, 4, 5, 6].map(() => (
          <Card />
        ))}
      </div>
    </div>
  );
}
