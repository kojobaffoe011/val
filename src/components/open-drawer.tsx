"use client"

import Image from 'next/image'
import * as React from "react"
import { Check } from "lucide-react"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { AcceptChoice } from "@/components/alert"
import { Card, CardContent } from "@/components/ui/card"

const choices = [
  {
    name: 'Dinner',
    type: "dinner",
    description: "An evening of a sweet dinner",
    image: "/dinner.svg",
  },
  {
    name: 'Paint & Bake',
    type: "paint",
    description: "Cute paint n bake with bae",
    image: "/paint.svg",
  },
]

export function OpenDrawer() {
  const [choice, setChoice] = React.useState<string>('dinner')
  const [open, setOpen] = React.useState<boolean>(false)

  const chooseDateType = (type: string) => {
    setChoice(type)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Yessss my bae</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full">
        <div className=" grid grid-cols-2 w-ful gap-2">
           {choices.map((item, index) => (
            <div className={`flex ${index==0 ?'justify-end' :'justify-start'}`}  key={index}>
              <div className="w-full max-w-sm cursor-pointer" onClick={() => chooseDateType(item.type)}>
          <DrawerHeader>
            <DrawerTitle>{item.name}</DrawerTitle>
            <DrawerDescription>{item.description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 relative">
            <div className="flex items-center justify-center space-x-2">
              {choice == item.type && <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full absolute -top-[-35px] -right-[-30px] border border-green-500"
              >
                <Check className='text-green-500' />
                <span className="sr-only">Type Choice</span>
              </Button>
              }
            </div>
            <div className="mt-1 p-1 cursor-pointer">
              <Card>
                <CardContent className="flex aspect-square justify-center p-0">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="rounded-lg"
                      alt="Picture of the author"
                    />
                </CardContent>
              </Card>
            </div>
          </div>
         
          </div> 
          </div>))}
          <div className="mx-auto max-w-sm w-full col-span-2">
          <DrawerFooter >
            <AcceptChoice choice={choice} setOpen={setOpen}/>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
         
        </div>
      </DrawerContent>
    </Drawer>
  )
}
