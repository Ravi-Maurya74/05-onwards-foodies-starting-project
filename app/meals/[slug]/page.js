export default function Page({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {params.slug} Page
      </h1>
    </main>
  );
}
