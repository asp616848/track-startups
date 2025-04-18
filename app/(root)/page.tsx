import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:
    {searchParams: Promise<{query?:string}>}
  ){

  const query = (await searchParams).query;

  const post = [
    {
      _createdAt:new Date(),
      views:55,
      author:{_id:3, name:"Abhi"},
      _id:3,
      description:"This description",
      image:'https://easydrawingguides.com/wp-content/uploads/2024/05/how-to-draw-zoro-from-one-piece-featured-image-1200.png',
      category:'Robots',
      title: 'We Robots'
    }
  ]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startups,<br/> connect with entrepreneurs</h1>
        <p className="sub-heading">Submit Ideas, Vote on Pitches and create an impact</p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container ">
        <p className="text-30-semibold">
          {query? `Search results for "${query}`:`All Startups`}
        </p>

        <ul className="card_grid  mt-7">
          {post.length > 0 ? (
            post.map((post, index) => (
              <StartupCard key={post._id || index} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}