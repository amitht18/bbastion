export default function HOC<T extends boolean>(Comp: React.ComponentType) {
  return (prop: T) => {
    return prop ? <Comp /> : <p>Loading</p> ;
  };
}