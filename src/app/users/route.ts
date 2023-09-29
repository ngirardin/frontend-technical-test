import { NextResponse } from "next/server"
import {users} from '../../../mockData'

export const GET = () => {
    return NextResponse.json(users)
}