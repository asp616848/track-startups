import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startups,<br/> connect with entrepreneurs</h1>
        <p className="sub-heading">Submit Ideas, Vote on Pitches and create an impact</p>
        <SearchForm/>
      </section>
    </>
  );
}
