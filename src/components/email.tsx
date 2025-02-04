import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  username?: string;
  invitedByUsername?: string;
  teamName?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}


export const VercelInviteUserEmail = ({
  username,
  invitedByUsername,
  teamName,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on a Date`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>Kojo</strong> on a{' '}<strong>Date</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{invitedByUsername}</strong>  has invited you to <strong>{teamName}</strong> on{' '}
              <strong>Feb 14, 2025</strong> at 5:00pm.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={inviteLink}
              >
                Add to calendar
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{' '}
              <span className="text-black">{username}</span>. This invite was
              sent from <span className="text-black">{inviteFromIp}</span>{' '}
              located in{' '}
              <span className="text-black">{inviteFromLocation}</span>. If you
              were not expecting this invitation, expect it now haha.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: 'alanturing',
  invitedByUsername: 'Kojo',
  teamName: 'Enigma',
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'São Paulo, Brazil',
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
