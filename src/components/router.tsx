import { SproutyApp } from '@pages/details/sprouty-app/SproutyApp';
import { MainPage } from '@pages/main/main';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/projects/sprouty-app' element={<SproutyApp />} />
      <Route path='*' element={<Navigate to={'/'} replace />} />
    </Routes>
  );
};
