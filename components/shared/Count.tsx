import { Button } from "../ui/button";

export default function Count() {
  return (
    <div>
      <Button>+</Button>
      <input type="number" />
      <Button>-</Button>
    </div>
  );
}
