import SearchForm from "../../components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}:
    {searchParams: Promise<{query?:string}>}
  ){

  const query = (await searchParams).query;
  const params = {search: query || null};

  const session = await auth();

  console.log("\n\nSessions is:",session?.id, "\n\n\n\n");

  // const post = await client.fetch(STARTUPS_QUERY)
  const {data: post} = await sanityFetch({query:STARTUPS_QUERY, params});

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
            post.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}