
import moment from 'moment'
export default {
  data: () => ({
    form: {
      id: "",
      name: "",
      totalprice: "",
      deleteid: "",
      date: moment().format('YYYY-MM-DD')
    },

    validationRules: {
      id: { required: true, regex: /^[0-9]+$/, max: 2 },
      name: { required: true, regex: /^[\u0E01-\u0E59\s]/, min: 5 },
      totalprice:{required: true, regex: /^[0-9]+$/, },
    },
  }),
  methods: {
   checkDate() {
    if (this.form.date && moment(this.form.date).isBefore(moment(), 'day')) {
      alert("วันที่เริ่มต้นต้องมากกว่าวันปัจจุบัน");
      this.form.date = ""; // รีเซ็ตค่าของ date เป็นค่าว่าง
    }
  },

    blockNonCharacters: (txt) => {
      const EnglishCharactersPattern = /^[0-9]|-+$/
      if (!EnglishCharactersPattern.test(txt.key)) {
        txt.preventDefault()
      }
    },
    blockNonThaiCharacters: (txt) => {
      const thaiCharactersPattern = /[\u0E01-\u0E59\s]/ // \u use for import unicode
      if (!thaiCharactersPattern.test(txt.key)) {
        txt.preventDefault()
      }
    },
  },
}
