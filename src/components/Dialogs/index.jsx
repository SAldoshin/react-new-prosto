import React, {Fragment} from 'react';
import "./style.css";

const Dialogs = () => {
	return (
		<Fragment>
			<h1 class="header-level-1">Dialogs</h1>
			<div class="chat">
				<div class="chat__users">
					<div class="person person_active">
						<div class="person__wrap-image">
							<img src="/images/users/avatar.jpg" alt="serge" class="person__image" />
						</div>
						<div class="person__user">
							<div class="person__name">SeregA</div>
							<div class="person__tagline">Earth is round</div>
							<div class="person__last-visit">14:00 02.02.2020</div>
						</div>
					</div>
					<a href="#" class="person person_waiting">
						<div class="person__wrap-image">
							<img src="/images/users/lizard.jpg" alt="dimon" class="person__image" />
						</div>
						<div class="person__user">
							<div class="person__name">Dmitry</div>
							<div class="person__tagline">Earth is round</div>
							<div class="person__last-visit">13:00 02.02.2020</div>
						</div>
					</a>
				</div>
				<div class="chat__message">
					<div class="message">
						<div class="message__identify">
							<img src="/images/users/avatar.jpg" alt="ava" class="message__image" />
						</div>
						<div class="message__text">Fgkd fd gjdf ghdfk ghdfkj</div>
					</div>
					<div class="message">
						<div class="message__identify">
							<img src="/images/users/avatar.jpg" alt="ava" class="message__image" />
						</div>
						<div class="message__text">Fgkd fd gjdf ghdfk ghdfkj</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Dialogs;