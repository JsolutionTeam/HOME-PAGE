
				<div style="width: 80%; height: auto; margin: 0 auto;">
					<h3 style="font-family: 'Nanum Square', sans-serif; margin: 0; padding: 0; font-size: 30px; line-height: 30px; color: #444;">신청내역 상세보기</h3>
					<div style="color: #666; font-family: 'Nanum Square', sans-serif; font-size: 14px;">
						<p style="text-align: right;">
							<strong class="black">신청일 : </strong>
							<?php
								$dateString = date("Y.m.d", $regdate);
								echo $dateString;
							?>
						</p>
						<table cellpadding="0" cellspacing="0" style="margin: 20px 0 0 0; width: 100%;" summary="상품명, 상품금액, 적립금 등">
							<caption style="display:none;">주문/결제상품 리스트</caption>
							<colgroup>
								<col width=""/>
							</colgroup>
							<thead>
								<tr>
									<th scope="col" style="border-top: 1px solid #000; border-bottom: 1px solid #e5e5e5; text-align: center; padding: 10px 0; color: #000; font-weight: normal;">상품명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row" style="text-align: left; border-bottom: 1px solid #e5e5e5; padding: 10px;">
										<div style="float: left; width: 100%; height: auto;">
											<dl style="float: left; margin: 0 0 0 22px; width: 85%;">
												<dt style="text-align: left;"><a style="text-decoration:none;"><?php echo $category_name ?></a></dt>
											</dl>
										</div>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div style="float: left; margin: 50px 0 0 0; width: 100%; height: auto;">
						<h4 style="font-size: 18px; line-height: 18px; font-weight: normal; color: #444;">주문자 정보</h4>
						<table cellpadding="0" cellspacing="0" style="margin: 20px 0 0 0; width: 100%; height: auto; border-top: 1px solid #000;" summary="주문자, 연락처, 주소 등">
							<caption style="display:none;">주문자 정보</caption>
							<colgroup>
								<col width="20%"/><col />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">회사명</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_company; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">담당자</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_name; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">부서</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_division; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">직책</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_position; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">연락처</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_tel; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">이메일</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_email; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">주소</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_addr; ?></td>
								</tr>
								<tr>
									<th scope="row" style="padding-left: 10px; color: #444; background: #f7f7f7; border-bottom: 1px solid #e5e5e5; text-align: left;">기타</th>
									<td style="border-bottom: 1px solid #e5e5e5; padding: 10px;"><?php echo $wr_etc; ?></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>