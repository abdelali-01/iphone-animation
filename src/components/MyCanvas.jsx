'use client'; // at the top if you're inside a component in app/ folder

import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { useState, useEffect } from 'react';

export default function MyCanvas() {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    setEventSource(document.body);
  }, []);

  if (!eventSource) {
    return null; // or a loading spinner
  }

  return (
    <Canvas
      className="w-full h-full fixed inset-0 overflow-hidden"
      eventSource={eventSource}
    >
      <View.Port />
    </Canvas>
  );
}
