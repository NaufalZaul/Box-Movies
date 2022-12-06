import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import Data from '../data/data';
import elementMovie from '../Element/element-movie';
import elementSwipe from '../Element/element-swipe';


const dataMovie = {

  async putData() {
    const datas = await Data.allDataMovie()
    _.map(await datas, e => {
      elementSwipe(e.show.image.medium)
    });
  },

  async Today() {
    $('.content-with-days .movie').remove();
    const a = $('.nav-days').children()
    _.filter(a, (e, j) => {
      if (e.className == moment().format('dddd')) {
        a[j].setAttribute('id', 'blue')
      }
    })
  },

  async filterData() {
    const datas = await Data.allDataMovie()
    _.filter(datas, (e) => {
      _.find(e.show.schedule.days, (d) => {
        const date = moment().format('dddd');
        if (d == date) {
          elementMovie(
            '.content-with-days',
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
  },

  async filterButton() {
    const datas = await Data.allDataMovie()
    const arr = Array()
    _.map(datas, e => {
      _.map(e.show.genres, a => {
        arr.push(a)
      })

    });

    _.map(_.uniq(arr), e => {
      $('.choose-genre').append(`
        <button type="submit" class="btn-genre" id="${e}">${e}</button>
      `)
    })
  },

}

export default dataMovie;
