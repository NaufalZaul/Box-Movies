import $ from 'jquery';
import _ from 'lodash';
import Data from '../data/data';
import elementMovie from './element-movie';

const clickButton = async () => {
  const datas = await Data.allDataMovie()
  $('.btn-genre').on('click', (a) => {
    $('.show-movie .movie').remove();
    _.filter(datas, (e) => {
      _.find(e.show.genres, (d) => {
        if (d == a.currentTarget.innerHTML) {
          elementMovie(
            '.show-movie',
            e.show.image.medium,
            e.show.status,
            e.show.name,
            e.show.summary,
            e.show.language,
            e.show.type,
            e.show.url,
          )
        }
      })
    })
  })


}
clickButton()
export default clickButton;