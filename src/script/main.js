import '../css/style.css';
import dataMovie from './Component/data-movie';
import clickButton from './Element/button-genre';
// import swiper from './Component/swiper';
import './Component/swiper';
import './Component/menu';


dataMovie.putData();
dataMovie.filterData();
dataMovie.Today();
dataMovie.filterButton();

clickButton();
