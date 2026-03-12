export type FontClass = { className: string }

const createFontClass = (className: string): FontClass => ({ className })

export const poppinsFont = createFontClass("font-poppins")
export const montserratFont = createFontClass("font-montserrat")
export const arabicFont = createFontClass("font-arabic")
