const randomTime = require('../helpers/randomTime');
const addMinutes = require('../helpers/addMinutes');
const makeDateRange = require('../helpers/makeDateRange');

const dateRange = makeDateRange();

const EventModel = {
  // Name of the model
  name: 'Event',

  // Model's route base
  // --- Available routes ---
  // get all event    => GET: localhost:9000/events/
  // create new event => POST: localhost:9000/events/
  // show event       => GET: localhost:9000/events/{id}/
  // update event     => PATCH/PUT: localhost:9000/events/{id}/
  // delete event     => DELETE: localhost:9000/events/{id}/
  route: '/events',

  // Database columns
  columns: [
    'title',
    'date',
    'start_time',
    'end_time',
  ],

  // Number of seeds to create
  seed: 20,

  // Model factory
  // faker => https://github.com/Marak/Faker.js#api-methods
  factory: faker => {
    const start_time = randomTime(8, 18);
    const end_time = addMinutes(start_time, 30);
    return {
      title: faker.company.catchPhraseDescriptor(),
      date: faker.date.between(dateRange.start_date, dateRange.end_date),
      start_time: start_time,
      end_time: end_time
    };
  },

  // Mutate data before persisting it to the database
  mutations: {
    date: (value) => {
      return new Date(value);
    },
  },

  // Model data validation
  validation: {
    title: {
      message: () => 'Título é um campo obrigatório',
      check: (value) => !!value,
    },
    date: {
      message: () => 'Data é um campo obrigatório e deve ter o formato "YYYY-MM-DD"',
      check: (value) => {
         if (!value) return false;
        const pattern = 'YYYY-MM-DD'
          .replace('MM', '(0[1-9]|1[0-2])')
          .replace('DD', '(0[1-9]|1[0-9]|2[0-9]|3[0-1])')
          .replace('YYYY', '(20[0-9][0-9]|1[8-9][0-9][0-9])');

        return new RegExp(`^${pattern}$`).test(value);
      },
    },
    start_time: {
      message: () => 'O campo da hora de início é um campo obrigatório e deve ter o formato "HH:mm"',
      check: (value) => {
         if (!value) return false;
        const pattern = 'HH:mm'
          .replace('mm', '([0-5][0-9])')
          .replace('HH', '([0-1][0-9]|2[0-3])');

        return new RegExp(`^${pattern}$`).test(value);
      },
    },
    end_time: {
      message: () => 'O campo da hora de término é um campo obrigatório e deve ter o formato "HH:mm"',
      check: (value) => {
         if (!value) return false;
        const pattern = 'HH:mm'
          .replace('mm', '([0-5][0-9])')
          .replace('HH', '([0-1][0-9]|2[0-3])');

        return new RegExp(`^${pattern}$`).test(value);
      },
    },
  }
};

module.exports = EventModel;
