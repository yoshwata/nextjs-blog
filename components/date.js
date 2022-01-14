import { parseISO, format } from 'date-fns'
import { Component, Fragment } from "react";
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
