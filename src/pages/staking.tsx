import { Container, Text, Stepper, Button, Group, Box } from "@mantine/core";
import { useState } from "react";

const Staking = () => {
	const [active, setActive] = useState(1);
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<Container>
			<Text>CIEL Staking Station へようこそ！</Text>
			<Text>
				ここでは、お持ちのウォレットの「dApp
				Connector」機能を利用して、安全に直接委任することができます。
			</Text>

			<Box my="4rem">
				<Stepper active={active} onStepClick={setActive} breakpoint="sm">
					<Stepper.Step label="First step" description="ウォレット選択">
						委任するウォレットを選択してください。
					</Stepper.Step>
					<Stepper.Step label="Final step" description="委任">
						委任情報を確認し、「委任する」ボタンを押してください。
					</Stepper.Step>
					<Stepper.Completed>
						委任先の変更が完了しました！ ご委任いただきありがとうございます。
					</Stepper.Completed>
				</Stepper>

				<Group position="center" mt="xl">
					<Button variant="default" onClick={prevStep}>
						Back
					</Button>
					<Button onClick={nextStep}>Next step</Button>
				</Group>
			</Box>
		</Container>
	);
};

export default Staking;
