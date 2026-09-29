import { useState } from "react";
import Container from "react-bootstrap/Container";
import ListOfOrchids from "../shared/ListOfOrchids";
import OrchidCard from "./OrchidCard";
import OrchidDetailModal from "./OrchidDetailModal";

export default function Orchids() {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [search, setSearch] = useState("");

  const visibleOrchids = ListOfOrchids.filter((orchid) =>
    orchid.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="orchids-page">
      <Container>
        <header className="page-header">
          <p className="eyebrow">Orchid collection</p>
          <h1>Discover Our Orchids</h1>
          {/* <p>Explore a collection of {ListOfOrchids.length} beautiful orchids.</p> */}

          {/* <input
            type="search"
            className="form-control search-box"
            placeholder="Search orchid by name..."
            aria-label="Search orchid by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
        </header>

        {visibleOrchids.length === 0 ? (
          <p className="text-center text-muted py-5">No orchid matches your search.</p>
        ) : (
          <section className="orchid-grid">
            {visibleOrchids.map((orchid) => (
              <OrchidCard
                key={orchid.id}
                orchid={orchid}
                onDetail={setSelectedOrchid}
              />
            ))}
          </section>
        )}
      </Container>

      <OrchidDetailModal
        orchid={selectedOrchid}
        onClose={() => setSelectedOrchid(null)}
      />
    </main>
  );
}
