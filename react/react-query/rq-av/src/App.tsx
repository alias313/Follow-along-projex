import { useQuery } from '@tanstack/react-query'
import './App.css'

async function getAVDevices() {
  try {
    // This will trigger the permission prompt
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

    return await navigator.mediaDevices.enumerateDevices();
  } catch (error) {
    console.error('Error accessing media devices:', error);
    return await navigator.mediaDevices.enumerateDevices();
  }}

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['devices'],
    queryFn: getAVDevices,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>Error</div> // Consider no data to be an error case

  return (
    <div>
      {data.map((device) => (
        <div key={`${device.kind}-${device.deviceId}`}>
          {device.label || `${device.kind} (no label)`}
        </div>
      ))}
    </div>
  );
}

export default App
