import React from 'react';

const Footerhome = () => {
    return (
      <React.Fragment>
    
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="footer__content">
						<div class="footer__social">
							<a href="#" > <i class="fab fa-facebook-f"></i> </a>
							<a href="#" > <i class="fab fa-twitter"></i> </a>
							<a href="#" > <i class="fab fa-instagram"></i> </a>
							<a href="#" > <i class="fab fa-linkedin-in"></i> </a>
							<a href="#" > <i class="fab fa-vk"></i> </a>
							<a href="#" > <i class="fab fa-pinterest"></i> </a>
						</div>

						<small class="footer__copyright">© Copyright 2021 <a href="#">Netland</a> All Rights Reserved.</small>
					</div>
				</div>
			</div>
		</div>
	</footer>

	<a  href="#" id="scrollUp">scroll top</a>

	<div id="modal-asset" class="zoom-anim-dialog mfp-hide modal modal--asset">
		<button class="modal__close" type="button"><i class="far fa-times"></i></button>

		<div class="row">
			
			<div class="col-12 col-xl-8">
				<div class="asset__item">
					<img src="assets/img/items/single.jpg" alt=""/>

					<div class="share share--asset">
						<a href="#" class="share__link share__link--fb"> <i class="fab fa-facebook-f"></i> <span>share</span></a>
						<a href="#" class="share__link share__link--tw"> <i class="fab fa-twitter"></i> <span>tweet</span></a>
						<a href="#" class="share__link share__link--link"> <i class="far fa-link"></i> <span>copy link</span></a>
					</div>

					<button class="asset__likes" type="button">
						<i class="far fa-heart"></i>
						<span>100k</span>
					</button>
					
				</div>
			</div>

			<div class="col-12 col-xl-4">
				<div class="asset__info">
					<div class="asset__desc">
						<h2>Colorful Fantacy Flower</h2>
					</div>

					<ul class="asset__authors">
						<li>
							<div class="card__price">
								<span>Sale price</span>
								<span class="text-danger fw-bolder">9.21 ETH</span>
							</div>
						</li>
						<li>
							<span>Creator</span>
							<div class="asset__author asset__author--verified">
								<img src="assets/img/avatars/1.jpg" alt=""/>
								<a href="author.html">@kimberly120</a>
							</div>
						</li>
					</ul>

					<ul class="nav nav-tabs asset__tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-bs-toggle="tab" href="#tab-33" role="tab" aria-controls="tab-33"
								aria-selected="false">Details</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22"
								aria-selected="false">Bids</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#tab-11" role="tab"
								aria-controls="tab-11" aria-selected="true">History</a>
						</li>
					</ul>
					

					<div class="tab-content">

						<div class="tab-pane fade show active" id="tab-33" role="tabpanel">
							<div class="asset__desc--tab">
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo.
								</p>
								<div class="asset__desc--content">
									<div class="asset__desc-list">
										<span> <i class="far fa-user"></i>Item Artist </span>
										<span> Marilyn Root </span>
									</div>
									<div class="asset__desc-list">
										<span> <i class="far fa-clock"></i>Created </span>
										<span> 25 Sep 2021 </span>
									</div>
									<div class="asset__desc-list">
										<span> <i class="far fa-journal-whills"></i>Item Size </span>
										<span> 2200 x 2500 </span>
									</div>
									<div class="asset__desc-list">
										<span> <i class="far fa-layer-group"></i>Formats </span>
										<span> MP4, JPEG </span>
									</div>
									<div class="asset__desc-list">
										<span> <i class="far fa-globe"></i>Downloadable file </span>
										<span> Yes </span>
									</div>
									<div class="asset__desc-list">
										<span> <i class="far fa-book-spells"></i>Edition </span>
										<span> 1/1 </span>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="tab-22" role="tabpanel">
							<div class="asset__actions">
								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/8.jpg" alt=""/>
									<p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br/>by <a
											href="author.html">@kimberly28</a></p>
								</div>

								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/9.jpg" alt=""/>
									<p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br/>by <a
											href="author.html">@nessler520</a></p>
								</div>

								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/10.jpg" alt=""/>
									<p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br/>by <a
											href="author.html">@kimberly120</a></p>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="tab-11" role="tabpanel">
							<div class="asset__actions asset__actions--scroll" id="asset__actions--scroll">
								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/8.jpg" alt=""/>
									<p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br/>by <a
											href="author.html">@kimberly28</a></p>
								</div>

								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/9.jpg" alt=""/>
									<p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br/>by <a
											href="author.html">@nessler520</a></p>
								</div>

								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/10.jpg" alt=""/>
									<p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br/>by <a
											href="author.html">@kimberly120</a></p>
								</div>

								<div class="asset__action asset__action--verified">
									<img src="assets/img/avatars/11.jpg" alt=""/>
									<p>Bid placed for <b>12.21 ETH</b> 6 hours ago <br/>by <a
											href="author.html">@humphrey124</a></p>
								</div>
							</div>
						</div>
						
					</div>
				

					<div class="asset__wrap">
						<div class="asset__timer">
							<span><i class="far fa-stopwatch"></i> Auction ends in</span>
							<div class="asset__clock"></div>
						</div>

						<div class="asset__price">
							<span>Minimum bid</span>
							<span>0.9 ETH</span>
						</div>
					</div>

				
					<div class="asset__btns">
						<button class="asset__btn" type="button">Place a bid</button>
					</div>
					
				</div>
			</div>
			
		</div>
	</div>
	
      </React.Fragment>
    );
};
export default Footerhome;