'use server'

import { Resend } from 'resend'
import { VercelInviteUserEmail } from '@/components/email'

const resend = new Resend(process.env.RESEND_API_KEY)


export async function sendEmail (choice: string) {
  return  await resend.emails.send({
      from: "Kojo Baffoe <onboarding@resend.dev>",
      to: ["kojobaffo935@gmail.com"],
      subject: "Invitation to Date with Kojo",
      react: VercelInviteUserEmail({  
        username: 'Wynonna',
  userImage: `/static/vercel-user.png`,
  invitedByUsername: 'Kojo',
  teamName: choice === 'dinner' ? 'Dinner' : 'Paint & Bake',
  teamImage: `/static/vercel-team.png`,
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'Duisburg, Germany',})
    });

}
