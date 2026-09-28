import ListOfOrchids from "../shared/ListOfOrchids";
import OrchidCard from "./OrchidCard";

export default function Orchids() {
  return (
    <main className="orchids-page">
      <header className="page-header">
        <p className="eyebrow">Orchid collection</p>
        <h1>Discover Our Orchids</h1>
        <p>Explore a collection of {ListOfOrchids.length} beautiful orchid.</p>
      </header>

      <section className="orchid-grid">
        {ListOfOrchids.map((orchid) => (
          <OrchidCard key={orchid.id} orchid={orchid}/>
        ))}
      </section>
    </main>
  );
}
