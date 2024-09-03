import * as yup from "yup";
export const blogEkleFormSchema = yup.object().shape({
    blogBaslik: yup.string().required("Blog başlık alanı zorunludur"),
    category: yup.string().required("Kategori alanı zorunludur"),
    blogIcerik: yup.string().required("Blog içerik alanı zorunludur"),
    codeExample: yup.string().required("Kod Örneği alanı zorunludur"),


});

