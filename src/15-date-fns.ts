import { subDays, format } from "date-fns";

const date = new Date(1998, 1, 28) // 0 = Enero, 1 = Febrero
const rta = subDays(date, 30)

const srt = format(rta, 'yyyy/mm/dd')

