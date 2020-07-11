import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export async function openDB () {
  return open({
    filename: 'f1.sqlite',
    driver: sqlite3.Database
  })
}