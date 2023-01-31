import { ref } from 'vue'

// by convention, composable function names start with "use"
export function useNewtonianPhysicPosition(acceleration = 0, velocity = 0, position = 0) {
  // state encapsulated and managed by the composable
  const _position = ref(position);
  let _velocity = velocity;
  const _acceleration = acceleration;


  // a composable can update its managed state over time.
  function update(intervalInMilisecond: number) {
    _position.value += _velocity * intervalInMilisecond / 1000;
    _velocity += _acceleration * intervalInMilisecond / 1000;
  }

  // expose managed state as return value
  return { _position, update };
}