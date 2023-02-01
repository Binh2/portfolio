import { ref } from 'vue'

export function useNewtonianPhysicPosition(acceleration = 0, velocity = 0, position = 0) {
  const _position = ref(position);
  let _velocity = velocity;
  const _acceleration = acceleration;

  function update(intervalInMilisecond: number) {
    _position.value += _velocity * intervalInMilisecond / 1000;
    _velocity += _acceleration * intervalInMilisecond / 1000;
  }

  return { _position, update };
}