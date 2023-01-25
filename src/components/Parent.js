export default function Parent({ children }) {
  return (
    <div>
      <h1>I am a parent</h1>
      <h2>These are my childrens:</h2>
      {children}
    </div>
  );
}
