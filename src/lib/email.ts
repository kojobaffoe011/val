'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { VercelInviteUserEmail } from '@/components/email'

const resend = new Resend(process.env.RESEND_API_KEY)


export async function sendEmail (choice: string) {
  try {
    await resend.emails.send({
      from: "Kojo Baffoe <onboarding@resend.dev>",
      to: ["kojobaffo935@gmail.com"],
      subject: "Invitation to Date with Kojo",
      react: VercelInviteUserEmail({  
        username: 'Wynonna',
      invitedByUsername: 'Kojo',
      teamName: choice === 'dinner' ? 'Dinner' : 'Paint & Bake',
      inviteFromIp: '204.13.186.218',
      inviteFromLocation: 'Duisburg, Germany',})
    });

  } catch (error) {
    console.log(error)
  }

   return redirect(`/`) 

}




