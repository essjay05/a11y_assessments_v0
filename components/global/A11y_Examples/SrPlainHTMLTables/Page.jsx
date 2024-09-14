import { ExamplesData } from "./PlainHtmlTables/ExamplesData";

export const Page = () => { 
  return (
    <>
      <main>
        <h1>Plain HTML Table Examples</h1>
        {/* Loop over HTML Table Examples */}
        {ExamplesData.map((Example, index) => (
          <Example key={index} />
        ))}
      </main>
    </>
  )
};

export default Page;