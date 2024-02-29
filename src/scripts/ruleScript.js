export default {
  data: () => ({
    form: {
      id: "",
      name: "",
      totalprice: "",
      deleteid: "",
    },

    validationRules: {
      id: { required: true, regex: /^[0-9]+$/, max: 2 },
      name: { required: true, regex: /^[\u0E01-\u0E59\s]/, min: 5 },
      totalprice:{required: true, regex: /^[0-9]+$/, }
    },
  }),
  methods: {
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
