How to get input value

1. event.target.name fo the input field. value
2. use form action and formData in the handler. formData.get("name of input field")
3. handle all controlled field on one state object
   const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: ""
   })

4. uncontrolled using useRef
   