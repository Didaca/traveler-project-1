import { Routes, Route } from 'react-router-dom';
import { Error404 } from './components/404/404';
import { DestinationPage } from './components/Pages/DestinationPage/DestinationPage';
import { EditProfilePage } from './components/Pages/EditProfilePage/EditProfilePage';
import { EditTestimonialsPage } from './components/Pages/EditTestimonialsPage/EditTestimonialsPage';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { LoginPage } from './components/Pages/LoginPage/LoginPage';
import { PackagesPage } from './components/Pages/PackagePage/PackagesPage';
import { RegistrationPage } from './components/Pages/RegistrationPage/RegistrationPage';
import { TestimonialsPage } from './components/Pages/TestimonialsPage/TestimonialsPage';
import { AuthorProvider } from './contexts/AuthorContext';
import { IdProvider } from './contexts/IdContext';



function App() {


  return (
    <AuthorProvider>
      <IdProvider>
      <>
        <Routes>

          <Route path='/' element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/registration' element={<RegistrationPage />} />

          <Route path='/profile/:profileId' element={<EditProfilePage />} />

          <Route path='/destinations' element={<DestinationPage />} />

          <Route path='/packages' element={<PackagesPage />} />

          <Route path='/testimonial' element={<TestimonialsPage />} />

          <Route path='/testimonial/:testimonialId' element={<EditTestimonialsPage />} />

          <Route path='*' element={<Error404/>} />

        </Routes>
      </>
      </IdProvider>
    </AuthorProvider>
  );
}

export default App;
