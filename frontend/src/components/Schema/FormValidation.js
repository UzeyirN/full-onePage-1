import * as yup from "yup"

export const inputSchema = yup.object().shape({
    image: yup.string("Please enter string value !").required("Enter image url address !"),
    author:yup.string("Please enter string value !").required("Enter commenter's name !"),
    specialty:yup.string("Please enter string value !").required("Enter commenter's specialty !"),
    comment:yup.string("Please enter string value !").required("Enter comment !").min(10,"Enter minimum 5 symbol")
})
